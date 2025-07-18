import type React from "react";
import { Link } from "react-router-dom";
import type { UserProfile } from "../../interface/User";

interface UserProfileImageProps {
  userProfile: UserProfile;
  avatarSize?: "w-12 h-12" | "w-10 h-10";
  className?: string;
  data?: number | string | undefined;
}

const UserProfileShortCut: React.FC<UserProfileImageProps> = (props) => {
  return (
    <div className={props.className}>
      <Link to={`/${props.userProfile.username}`}>
        <img src={props.userProfile.avatar} alt="User" className={`rounded-full object-cover ${props.avatarSize ?? "w-12 h-12"}`} />
      </Link>
      <div className="h-12 flex flex-col justify-between">
        <Link to={`/${props.userProfile.username}`} className="hover:underline">
          <h1 className="h-6 font-bold text-xl">{props.userProfile.name}</h1>
        </Link>
        {props.data && <h3 className="h-4 font-light text-sm">{props.data}</h3>}
      </div>
    </div>
  );
};

export default UserProfileShortCut;
