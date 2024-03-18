import { UserProfile,auth } from "@clerk/nextjs";
import { fetchUserTokenById } from "@/utils/actions";

const ProfilePage = async () => {
  const { userId } = auth();
  const currentTokens = await fetchUserTokenById(userId);
  return (
    <div>
      <h2 className='mb-8 ml-8 text-xl font-extrabold'>
        Token Amount : {currentTokens}
      </h2>
      <UserProfile />
    </div>
  )
};

export default ProfilePage;
