import React, { useEffect } from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from "../../components/Users/User";
import { UsersSearchForm } from './UsersSearchForm';
import { FilterType, requestUsers } from '../../redux/users-reducer';
import { useDispatch, useSelector } from 'react-redux';
import {
    getCurrentPage,
    getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers,
    getUsersFilter
} from '../../redux/users-selectors';
import { useHistory } from 'react-router-dom';
import * as queryString from 'querystring';

type QueryParamsType = { term?: string, page?: string, friend?: string };
export const Users: React.FC = (props) => {
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)
    const followingInProgress = useSelector(getFollowingInProgress)
    const dispatch = useDispatch()
    const users = useSelector(getUsers)
    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter))
    }
    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter))
    }
    const unfollow = (userId: number) => {
        dispatch(unfollow(userId))
    }
    const follow = (userId: number) => {
        dispatch(follow(userId))
    }
    useEffect(() => {
        const parsed = queryString.parse(history.location.search.substr(1)) as QueryParamsType

        let actualPage = currentPage
        let actualFilter = filter
        if (!!parsed.page) actualPage = Number(parsed.page)
        if (!!parsed.term) actualFilter = { ...actualFilter, term: parsed.term as string }
        switch (parsed.friend) {
            case "null":
                actualFilter = { ...actualFilter, friend: null }
                break
            case "true":
                actualFilter = { ...actualFilter, friend: true }
                break
            case "false":
                actualFilter = { ...actualFilter, friend: false }
                break
        }
        dispatch(requestUsers(actualPage, pageSize, actualFilter))
    }, [])
    useEffect(() => {
        const query: QueryParamsType = {}

        if (!!filter.term) query.term = filter.term
        if (filter.friend !== null) query.friend = String(filter.friend)
        if (currentPage !== 1) query.page = String(currentPage)

        history.push({
            pathname: '/users',
            search: queryString.stringify(query)
        })
    }, [filter, currentPage])
    const history = useHistory();
    return <div>
        <UsersSearchForm onFilterChanged={onFilterChanged}/>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalItemsCount={totalUsersCount} pageSize={pageSize}/>
        <div>
            {users.map(u =>
                <User user={u}
                      followingInProgress={followingInProgress}
                      key={u.id}
                      unfollow={unfollow}
                      follow={follow}/>)}
        </div>
    </div>
}