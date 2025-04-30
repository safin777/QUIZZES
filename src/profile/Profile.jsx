import Avatar from "../assets/avater.webp";
import { useAuth } from "../hooks/useAuth";

const Profile = () => {
  const {auth} = useAuth();
  return (
    <div className="mb-12 text-center">
      <img
        src={Avatar}
        alt="Profile Picture"
        className="object-cover mx-auto mb-4 w-32 h-32 rounded-full border-4 border-primary"
      />
      <p className="text-xl text-gray-600">Welcome</p>
      <h2 className="text-4xl font-bold text-gray-700 fontJero">{auth.user.full_name}</h2>
    </div>
  );
};

export default Profile;
