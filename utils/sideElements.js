import { openLink } from "./methods";

const handleIconClick = (icon) => {
  const links = {
    github: "https://github.com/Akhilesh1501",
    // Opens Gmail compose window directly
    email:
      "https://mail.google.com/mail/?view=cm&fs=1&to=yadavakhilesh480@gmail.com&su=Hello",
    linkedin: "https://www.linkedin.com/in/yadav-akhilesh-b28b1b186/",
  };

  openLink(links[icon]);
};

const sideElements = {
  emailButton: {
    label: "yadavakhilesh480@gmail.com",
    onClick: () =>
      openLink(
        "https://mail.google.com/mail/?view=cm&fs=1&to=yadavakhilesh480@gmail.com&su=Hello"
      ),
  },
  handleIconClick,
};

export default sideElements;
