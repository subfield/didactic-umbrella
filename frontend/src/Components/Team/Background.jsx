import TeamBackgroundImage from "../../assets/Images/TeamBackGroundImage.svg";

function Background() {
  return (
    <div
      className="bg-cover bg-center h-96 flex items-center justify-center"
      style={{ backgroundImage: `linear-gradient(to bottom, rgba(255, 192, 203, 0.7), rgba(255, 105, 180, 0.5)), url(${TeamBackgroundImage})` }}
    >
      <div className=" p-8 max-w-4xl w-full text-center">
        <h1 className="text-xl font-medium text-white mb-4">Team</h1>
        <h2 className="text-3xl font-bold  text-white">
          Meet the Humans Behind Crystal Bricks
        </h2>
      </div>
    </div>
  );
}

export default Background;
