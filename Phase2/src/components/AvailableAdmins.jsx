import { useState } from "react";
import PropTypes from "prop-types";

function AvailableAdmins({ admins, onAdminSelect }) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredAdmins = admins.filter((admin) =>
            admin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="flex flex-col h-full">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search for an admin..."
        className="w-full p-3 mb-4 rounded-lg bg-white text-white placeholder-gray-400 focus:outline-none"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Admins List */}
      <div className="grid grid-cols-3 gap-4">
        {filteredAdmins.map((admin) => (
          <button
            key={admin.id}
            onClick={() => onAdminSelect(admin)}
            className="flex flex-col items-center"
          >
            <img
              src={admin.profilePic}
              alt={admin.name}
              className="w-12 h-12 rounded-full mb-2"
            />
            <span className="text-white text-sm">{admin.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}


AvailableAdmins.propTypes = {
  admins: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, 
      name: PropTypes.string.isRequired, 
      profilePic: PropTypes.string.isRequired, 
    })
  ).isRequired,
  onAdminSelect: PropTypes.func.isRequired, 
};

export default AvailableAdmins;
