import { GithubUser } from './../../../Types/user';

export const isGithubUser = (user: any): user is GithubUser => 'id' in user; 
