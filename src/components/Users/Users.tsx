import React, { FC } from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from "../../components/Users/User";
import { UserType } from '../../Types/types';
import { UsersSearchForm } from './UsersSearchForm';
import { FilterType } from '../../redux/users-reducer';

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    onFilterChanged: (filter: FilterType) => void
}

let Users: FC<PropsType> = ({currentPage,
                                onPageChanged,
                                totalUsersCount,
                                pageSize,
                                users,
                                ...props}) => {
    return <div>
        <UsersSearchForm onFilterChanged={props.onFilterChanged}/>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalItemsCount={totalUsersCount} pageSize={pageSize}/>
        <div>
            {users.map(u => <User user={u}
                                  followingInProgress={props.followingInProgress}
                                  key={u.id}
                                  unfollow={props.unfollow}
                                  follow={props.follow}/>)}
        </div>
    </div>
}

export default Users;