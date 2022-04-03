import React from "react";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="header">
        <div className="maintopic">브랜드 빌딩</div>
        <div className="subtopic">더소스랩</div>
      </div>
      <div className="body">
        <div className="box">
          <span className="phase">1단계</span>
          <div className="list">
            <li>제품 아이덴티티 : 에센스? 소스?</li>
            <li>제품 차별점 : 간편함 = 홈쿡? 캠핑? 여행?</li>
            <li>제품 타깃 : 30대 기혼 여성? </li>
          </div>
        </div>
        <div className="box">
          <span className="phase">2단계</span>
          <div className="list">
            <li>브랜드 페르소나 설정</li>
            <li>브랜드 아이덴티티 설정</li>
            <li>필요 산출물 리스트업</li>
          </div>
        </div>
        <div className="box">
          <span className="phase">3단계</span>
          <div className="list">
            <li>홈페이지 콘텐츠 리스트업</li>
            <li>홈페이지 레퍼런스 서칭</li>
            <li>그래픽 디자인 / 촬영 레퍼런스 서칭</li>
          </div>
        </div>
        <div className="box">
          <span className="phase">4단계</span>
          <div className="list">
            <li>홈페이지 개발 시작</li>
            <li>홈페이지 외 제작물 디자인</li>
            <li>블로그, SNS 리뉴얼</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
