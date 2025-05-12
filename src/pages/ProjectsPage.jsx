import React from 'react';
import ProjectCard from '../components/ProjectCard';
import sampleImage from '../assets/calcu.png';

/**
 * 프로젝트 페이지 컴포넌트
 * 사용자의 프로젝트들을 카드 형태로 보여주는 페이지
 */
const ProjectsPage = () => {
  const projects = [
    {
      title: '나의 프로젝트1',
      description: 'React를 사용하여 만든 계산기 애플리케이션',
      image: sampleImage,
      details:
        'React의 상태 관리(useState)를 통해 계산기 기능을 구현했고, 컴포넌트를 분리하여 구조화된 UI를 만들었습니다.',
    },
    {
      title: '나의 프로젝트2',
      description: '캡스톤 프로젝트에서의 AI 기반 장병 체력 훈련 프로젝트',
      details:
        'Python과 미디어파이프로 구현한 모션 인식을 활용하여 군 장병 체력 훈련 프로젝트를 진행',
    },
    {
      title: '나의 프로젝트3',
      description: '동국대학교 동아리 박락회 사이트',
      details:
        '동아리 박람회를 즐기는 사용자들을 위한 동아리 박람회 사이트 제작',
    },
  ];

  return (
    <div className="projects-container">
      <h2>프로젝트</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            details={project.details}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
