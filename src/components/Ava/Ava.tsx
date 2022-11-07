import React, {useState} from 'react';
import s from './Ava.module.scss'
import {Container} from "./Container/Container";
import {TheHeader} from "./TheHeader/TheHeader";
import {Search} from "./Search/Search";
import {GithubError, GithubUser, LocalGithubUser} from "../../Types/user";
import {UserCard} from "./UserCard/UserCard";
import {isGithubUser} from "./utils/typeguards";
import {extractLocalUser} from "./utils/exract-local-user";
import {defaultUser} from "./mock";

const BASE_URL = 'https://api.github.com/users/'
export function Ava() {
    const [user, setUser] = useState<LocalGithubUser | null>(defaultUser);

    const fetchUser = async (username: string) => {
        const url = BASE_URL + username;

        const res = await fetch(url);
        const user = await res.json() as GithubUser | GithubError;

        if (isGithubUser(user)) {
            setUser(extractLocalUser(user));
        } else {
            setUser(null);
        }
    }
    return (
        <div className={s.ava}>
            <Container>

                <Search hasError={!user} onSubmit={fetchUser}/>

                {user && (
                    <UserCard
                        {...user}
                    />
                )}

            </Container>
        </div>
    )
}