import React from 'react';


export type UsersPageType = {
 Users: Array<UserType>
 totalCount: number
 chosenPage: number
 pageSize: number
}

export type UserType = {
 id: number
 photoUrl: string
 fullName: string
 followed: boolean
 status: string
 location: {
  country: string
  city: string
 }
}


type followACType = ReturnType<typeof followAC>
type unFollowACType = ReturnType<typeof unFollowAC>
type setUsersACType = ReturnType<typeof setUsersAC>
type setTotalCountACType = ReturnType<typeof setTotalCountAC>
type setChosenPageACType = ReturnType<typeof setChosenPageAC>

type ActionUsersType = followACType | unFollowACType | setUsersACType | setTotalCountACType | setChosenPageACType

const initialState: UsersPageType = {
 Users: [],
 totalCount: 0,
 chosenPage: 1,
 pageSize: 100
}

const UsersReducer = (state: UsersPageType = initialState, action: ActionUsersType) => {
 switch (action.type) {
  case "FOLLOW":
   return {...state, Users: [...state.Users.map(el => el.id === action.id ? {...el, followed: true}: {...el})]}
  case "UNFOLLOW":
   return {...state, Users: [...state.Users.map(el => el.id === action.id ? {...el, followed: false} : {...el})]}
  case "SET-USERS":
   return {...state, Users: action.users}
  case "SET-TOTAL-COUNT":
   return {...state, totalCount: action.count}
  case "SET-CHOSEN-PAGE":
   return {...state, chosenPage: action.chosenPage}
  default:
   return state
 }
}

export const followAC = (id: number) => {
 return {
  type: "FOLLOW",
  id: id
 } as const
}

export const unFollowAC = (id: number) => {
 return {
  type: "UNFOLLOW",
  id: id
 } as const
}

export const setUsersAC = (users: Array<UserType>) => {
 return {
  type: "SET-USERS",
  users: users
 } as const
}

export const setTotalCountAC = (count: number) => {
 return {
  type: "SET-TOTAL-COUNT",
  count: count
 } as const
}

export const setChosenPageAC = (chosenPage: number) => {
 return {
  type: "SET-CHOSEN-PAGE",
  chosenPage: chosenPage
 } as const
}


export default UsersReducer;