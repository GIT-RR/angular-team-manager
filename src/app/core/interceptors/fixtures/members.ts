import { Member } from 'src/app/core/models/member';
import { roles, genders } from './common';

export const members: Member[] = [
  {
    id: 0,
    email: 'rui@mail.com',
    name: 'Rui Ribeiro',
    gender: 'm',
    role: 'tl',
    isActive: true,
  },
  {
    id: 1,
    email: 'nuno@mail.com',
    name: 'Nuno Simoes',
    gender: 'm',
    role: 'bed',
    isActive: true,
  },
  {
    id: 2,
    email: 'martim@mail.com',
    name: 'Martim Matos',
    gender: 'm',
    role: 'fed',
    isActive: true,
  },
  {
    id: 3,
    email: 'telma@mail.com',
    name: 'Telma Fernandes',
    gender: 'f',
    role: 'dbd',
    isActive: true,
  },
  {
    id: 4,
    email: 'tania@mail.com',
    name: 'Tania Afonso',
    gender: 'f',
    role: 'dbd',
    isActive: true,
  },
  {
    id: 5,
    email: 'miguel@mail.com',
    name: 'Miguel Gil',
    gender: 'm',
    role: 'bed',
    isActive: true,
  },
  {
    id: 6,
    email: 'marta@mail.com',
    name: 'Marta Marques',
    gender: 'f',
    role: null,
    isActive: true,
  },
];

export const getAll = (): Member[] => {
  return members.filter((m) => m.isActive);
};

const memberMapper = (member: Member) => {
  return {
    ...member,
    roleDesc: roles.find((r) => r.value === member.role)?.name || 'No role',
    genderDesc:
      genders.find((r) => r.value === member.gender)?.name || 'No gender',
  };
};

export const get = (id: number): Member => {
  return memberMapper(members.find((x) => x.id === id));
};

export const add = (member: Member) => {
  members.push({ ...member, id: members.length, isActive: true });
};

export const remove = (id: number) => {
  const index = members.findIndex(function (o) {
    return o.id === id;
  });

  members[index].isActive = false;
};

export const update = (member: Member) => {
  const index = members.findIndex(function (o) {
    return o.id === member.id;
  });
  members[index] = Object.assign(members[index], member);
};
