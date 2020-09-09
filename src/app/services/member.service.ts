import { Injectable } from '@angular/core';
import { Member } from '../interfaces/member';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  private membersUrl = 'api/members'; // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getMembers(): Observable<Member[]> {
    this.messageService.add('MemberService: fetching members');
    return this.http.get<Member[]>(this.membersUrl);
  }

  getMember(id: number): Observable<Member> {
    this.messageService.add('MemberService: fetching member id ' + id);
    return this.http.get<Member>(this.membersUrl + '/' + id);
  }

  addMember(member: Member) {
    this.messageService.add('MemberService: add member');
    return this.http.post(this.membersUrl, member, this.httpOptions).pipe(
      tap((_) =>
        this.messageService.add(`MemberService: added member id ${member.id}`)
      ),
      catchError(this.handleError<any>('addMember'))
    );
  }

  updateMember(member: Member) {
    this.messageService.add('MemberService: updating member id ' + member.id);
    return this.http.put(this.membersUrl, member, this.httpOptions).pipe(
      tap((_) =>
        this.messageService.add(`MemberService: updated member id ${member.id}`)
      ),
      catchError(this.handleError<any>('updateMember'))
    );
  }

  deleteMember(id: number) {
    this.messageService.add('MemberService: deleting member id ' + id);

    return this.http.delete(this.membersUrl + '/' + id, this.httpOptions).pipe(
      tap((_) =>
        this.messageService.add(`MemberService: deleted member id ${id}`)
      ),
      catchError(this.handleError<any>('deleteMember'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.messageService.add(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
