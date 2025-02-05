import Avatar from "../assets/avater.webp";

const Profile = () => {
  return (
    <div className="mb-12 text-center">
      <img
        src={Avatar}
        alt="Profile Picture"
        className="object-cover w-32 h-32 mx-auto mb-4 border-4 rounded-full border-primary"
      />
      <p className="text-xl text-gray-600">Welcome</p>
      <h2 className="text-4xl font-bold text-gray-700 fontJero">Saad Hasan</h2>
    </div>
  );
};

export default Profile;
