import { useAPI } from "./../../context/dataContext";
import "./InfoSection.scss";

const InfoSection = () => {
  const { users } = useAPI();
  console.log(users);
  return (
    <section className="infoSection">
      <div className="infoSection__inner">
        {users.length === 0 ? (
          <p className="">~読み込み中~</p>
        ) : (
          <h1 className="infoSection__headline title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-center">
            {users.text}
          </h1>
        )}
      </div>
    </section>
  );
};
export default InfoSection;
