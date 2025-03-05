import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Photos = () => {
  const dummyPhotos = [
    { id: 1, title: "Sunset View", url: "https://via.placeholder.com/150" },
    { id: 2, title: "Mountain Landscape", url: "https://via.placeholder.com/150" },
    { id: 3, title: "City Lights", url: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-5">
        <Navbar />
        <h1 className="text-2xl font-bold mt-5">Manage Photos</h1>
        <div className="grid grid-cols-3 gap-4 mt-5">
          {dummyPhotos.map((photo) => (
            <div key={photo.id} className="border p-2 shadow-md">
              <img src={photo.url} alt={photo.title} className="w-full h-40 object-cover" />
              <p className="text-center font-semibold mt-2">{photo.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Photos;
