import React from 'react';
import ProfileCard from '../components/ProfileCard';
import SkillsList from '../components/SkillsList';
import Strengths from '../components/Strengths';

const AboutPage = () => {
  const skills = ['HTML/CSS', 'JavaScript', 'React', 'Node.js'];
  const strengths = [
    '문제를 끝까지 파고드는 끈기',
    '원활한 소통으로 협업 능력 탁월',
    '새로운 기술을 빠르게 습득하는 학습력',
  ];

  return (
    <div className="about-container">
      <h2>자기소개</h2>
      <ProfileCard />
      <SkillsList skills={skills} />
      <Strengths strengths={strengths} />
    </div>
  );
};

export default AboutPage;
