import React from "react";
import ProfileInfo from "../../components/Profile/ProfileInfo/ProfileInfo";
import MyPostsContainer from "../../components/Profile/MyPosts/MyPostsContainer";
import { ProfileType } from '../../Types/types';

type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

const Profile:React.FC<PropsType> = (props) => {

    return (
        <div>
            <ProfileInfo isOwner={props.isOwner}
                         savePhoto={props.savePhoto}
                         profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         saveProfile={props.saveProfile}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;