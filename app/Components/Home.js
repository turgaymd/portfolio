import { FaGithub,FaHackerrank,FaLinkedinIn,} from "react-icons/fa";
const Home = () => {
  return (
    <div className="admin">
      <p className="h3">Hi, I am</p>
      <div className="typewriter">
        <h2>Turgay Mammadov </h2>
      </div>
      {/* <h4>front-end developer</h4> */}
      <div className="social pt-2">
        <a className="text-white" href="https://github.com/turqay667">
          <FaGithub />
        </a>
        <a
          className="text-white"
          href="https://www.hackerrank.com/profile/memmedovturqay81"
        >
          <FaHackerrank />
        </a>
        <a
          className="text-white"
          href="https://www.linkedin.com/in/turgay-mammadov/"
        >
          <FaLinkedinIn />
        </a>
      </div>

      {/* <div className="admin_social col-md-8">
<a className="text-white" href="https://github.com/turqay667"><FaGithub /></a>
<a className="text-white" href="https://www.linkedin.com/in/turgay-mammadov-66011a1b2/"><FaLinkedinIn/></a>
<a className="text-white" href="https://www.hackerrank.com/profile/memmedovturqay81"><FaHackerrank /></a>
</div> */}
    </div>
  );
};
export default Home;
