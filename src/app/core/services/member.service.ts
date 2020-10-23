import { Injectable } from '@angular/core';
import { Member } from 'src/app/core/models/member';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {} // private messageService: MessageService // private http: HttpClient,

  async getMembers(): Promise<Member[]> {
    return this.httpClient
      .get('http://localhost:4200/members')
      .toPromise()
      .then((res) => res as Member[])
      .catch((e) => {
        throw e;
      });
  }

  async getMember(id: number): Promise<Member> {
    return this.httpClient
      .get('http://localhost:4200/members/' + id)
      .toPromise()
      .then((res) => res as Member)
      .catch((e) => {
        throw e;
      });
  }

  async addMember(member: Member): Promise<any> {
    return this.httpClient
      .post('http://localhost:4200/members/add', member)
      .toPromise()
      .then((res) => res)
      .catch((e) => {
        throw e;
      });
  }

  async updateMember(member: Member): Promise<any> {
    return this.httpClient
      .post('http://localhost:4200/members/update', member)
      .toPromise()
      .then((res) => res)
      .catch((e) => {
        throw e;
      });
  }

  async removeMember(id: number): Promise<any> {
    return this.httpClient
      .post('http://localhost:4200/members/delete/' + id, null)
      .toPromise()
      .then((res) => res)
      .catch((e) => {
        throw e;
      });
  }

  // getMembers(): Observable<Member[]> {
  //   this.messageService.add('MemberService: fetching members');
  //   return this.http.get<Member[]>(this.membersUrl);
  // }

  // getMember(id: number): Observable<Member> {
  //   this.messageService.add('MemberService: fetching member id ' + id);
  //   return this.http.get<Member>(this.membersUrl + '/' + id);
  // }

  // addMember(member: Member) {
  //   this.messageService.add('MemberService: add member');
  //   return this.http.post(this.membersUrl, member, this.httpOptions).pipe(
  //     tap((_) =>
  //       this.messageService.add(`MemberService: added member id ${member.id}`)
  //     ),
  //     catchError(this.handleError<any>('addMember'))
  //   );
  // }

  // updateMember(member: Member) {
  //   this.messageService.add('MemberService: updating member id ' + member.id);
  //   return this.http.put(this.membersUrl, member, this.httpOptions).pipe(
  //     tap((_) =>
  //       this.messageService.add(`MemberService: updated member id ${member.id}`)
  //     ),
  //     catchError(this.handleError<any>('updateMember'))
  //   );
  // }

  // deleteMember(id: number) {
  //   this.messageService.add('MemberService: deleting member id ' + id);

  //   return this.http.delete(this.membersUrl + '/' + id, this.httpOptions).pipe(
  //     tap((_) =>
  //       this.messageService.add(`MemberService: deleted member id ${id}`)
  //     ),
  //     catchError(this.handleError<any>('deleteMember'))
  //   );
  // }

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // TODO: better job of transforming error for user consumption
  //     this.messageService.add(`${operation} failed: ${error.message}`);

  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }
}
