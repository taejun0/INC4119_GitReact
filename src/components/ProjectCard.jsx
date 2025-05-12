import React, { useState } from 'react';

/**
 * 프로젝트 카드 컴포넌트
 * @param {string} title - 프로젝트의 제목
 * @param {string} description - 프로젝트의 설명
 * @param {string} image - 프로젝트의 이미지 URL (선택적)
 * @param {string} link - 프로젝트의 외부 링크 URL (선택적)
 * @param {string} details - 상세 설명 (선택적)
 */
const ProjectCard = ({ title, description, image, link, details }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleDetails = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div className="project-card">
      <h3>{title}</h3>

      {image && (
        <div className="project-image">
          <img src={image} alt={title} />
        </div>
      )}

      <p>{description}</p>

      {details && (
        <div>
          <button className="toggle-btn" onClick={toggleDetails}>
            {expanded ? '접기 ▲' : '더보기 ▼'}
          </button>
          {expanded && <p className="project-details">{details}</p>}
        </div>
      )}

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          프로젝트 보기
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
