import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { ProfileModel } from '../model/profile.model';
import { profile } from '../../assets/profile.json';

@Injectable()
export class ProfileService {
    private readonly state = new BehaviorSubject<ProfileModel>(profile);

    about$ = this.state.pipe(
        map(it => it.about),
        distinctUntilChanged()
    );

    overview$ = this.state.pipe(
        map(it => it.overview),
        distinctUntilChanged()
    );

    experience$ = this.state.pipe(
        map(it => it.experience),
        distinctUntilChanged()
    );

    contribution$ = this.state.pipe(
        map(it => it.contribution),
        distinctUntilChanged()
    );

    certification$ = this.state.pipe(
        map(it => it.certification),
        distinctUntilChanged()
    );

    skills$ = this.state.pipe(
        map(it => it.skills),
        distinctUntilChanged()
    );

    language$ = this.state.pipe(
        map(it => it.language),
        distinctUntilChanged()
    );

    clause$ = this.state.pipe(
        map(it => it.clause),
        distinctUntilChanged()
    );

}
