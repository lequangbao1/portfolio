import React from "react";
import { Icons, Profile } from "../components";
import ProfilePhoto from "../img/perfil.png";
// import CV from "../file/CV_LEQUANGBAO_16JUL21.pdf";

const Home = () => {
  return (
    <>
      <Profile id="home">
        <Profile.AvatarWrapper>
          <Profile.Avatar src={ProfilePhoto} />
        </Profile.AvatarWrapper>
        <Profile.Name>Le Quang Bao</Profile.Name>
        <Profile.Job>Frontend Developer</Profile.Job>
        <Profile.Pane>
          <Icons.Wrapper
            href="https://www.facebook.com/somua.roi/"
            target="_blank"
          >
            <Icons.Facebook />
          </Icons.Wrapper>
          <Icons.Wrapper href="https://github.com/lequangbao1" target="_blank">
            <Icons.Github />
          </Icons.Wrapper>
          <Icons.Wrapper>
            <Icons.Linkedin />
          </Icons.Wrapper>
          <Icons.Wrapper
            href="https://www.instagram.com/baole_94/"
            target="_blank"
          >
            <Icons.Instagram />
          </Icons.Wrapper>
        </Profile.Pane>
        <Profile.Button
        // href = {CV}
        >
          download resume
        </Profile.Button>
      </Profile>
    </>
  );
};

export default Home;
