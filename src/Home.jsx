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
            <li>제품 아이덴티티 : 양념(다대기)</li>
            <li>제품 차별점 : 편의성 </li>
            <li>제품 타깃 : 1~2인 가구 (about) </li>
          </div>
        </div>
        <div className="box">
          <span className="phase">2단계</span>
          <div className="list">
            <li>브랜드 페르소나 - 현대인(특히 1~2인 가구)가 엄청 편리한 식생활 위한? </li>
            <li>브랜드 아이덴티티 - 밥준비는 5분안에</li>
            <li>필요 산출물 리스트업 - 홈페이지 / 홍보물 / 명함같은거(?)</li>
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
