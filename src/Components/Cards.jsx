import Card from "./Card";

function Cards() {
  return (
    <div className="w-full ">
      <div className="max-w-screen-2xl mx-28 pt-20 flex gap-2 ">
        <Card width={"basis-1/3"} start={false} para={true} />
        <Card width={"basis-3/4"} start={true} para={false} hover="true" />
      </div>
    </div>
  );
}

export default Cards;
