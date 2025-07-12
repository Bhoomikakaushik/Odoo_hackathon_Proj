import React, { useState } from 'react';
import SearchBar from './Search';
import ProfileCard from './Profile';
import Pagination from './Pagination';
import './Homepage.css'
// import { useNavigate } from 'react-router-dom';

// const navigate = useNavigate()
const profiles = [
  {
    id: 1,
    name: 'Marc Demo',
    profilePhoto: 'https://via.placeholder.com/150 ',
    skillsOffered: ['JavaScript', 'Python'],
    skillsWanted: ['Photoshop', 'Graphic Designer'],
    rating: 3.9,
  },
  {
    id: 2,
    name: 'Michell',
    profilePhoto: 'https://via.placeholder.com/150 ',
    skillsOffered: ['JavaScript', 'Python'],
    skillsWanted: ['Photoshop', 'Graphic Designer'],
    rating: 2.5,
  },
  {
    id: 3,
    name: 'Joe Wills',
    profilePhoto: 'https://via.placeholder.com/150 ',
    skillsOffered: ['JavaScript', 'Python'],
    skillsWanted: ['Photoshop', 'Graphic Designer'],
    rating: 4.0,
  },
  {
    id: 4,
    name: 'Marc Demo',
    profilePhoto: 'https://via.placeholder.com/150 ',
    skillsOffered: ['JavaScript', 'Python'],
    skillsWanted: ['Photoshop', 'Graphic Designer'],
    rating: 3.9,
  },
  {
    id: 5,
    name: 'Michell',
    profilePhoto: 'https://via.placeholder.com/150 ',
    skillsOffered: ['JavaScript', 'Python'],
    skillsWanted: ['Photoshop', 'Graphic Designer'],
    rating: 2.5,
  },
  {
    id: 6,
    name: 'Joe Wills',
    profilePhoto: 'https://via.placeholder.com/150 ',
    skillsOffered: ['JavaScript', 'Python'],
    skillsWanted: ['Photoshop', 'Graphic Designer'],
    rating: 4.0,
  },
];

const Homepage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProfiles = profiles.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(profiles.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="homepage">
      <SearchBar />
      <div className="profiles">
        {currentProfiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Homepage;