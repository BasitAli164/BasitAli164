export default async function ProductDetails({ params }) {
  const { id } = await params;
  console.log("id :", id);
  return (
    <div>
      <h1>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae eligendi
        illum debitis, cum laborum totam voluptatibus enim doloremque itaque
        alias nostrum? Culpa obcaecati accusantium eum magnam, nobis et alias,
        eligendi aliquid maiores porro hic molestiae atque reprehenderit commodi
        officia deleniti eaque aliquam reiciendis enim, optio ducimus inventore
        autem ipsum non! Sit hic commodi, iure laboriosam labore dicta quod
        ducimus! Earum dicta optio sed tenetur quas quos accusantium doloribus,
        minima perspiciatis placeat distinctio quia aliquam itaque quasi
        incidunt? Quidem repellendus iusto nihil unde eos voluptate nemo porro
        quod, eveniet totam non, quo a nobis libero dolores eligendi! Odit
        praesentium sint corporis?
      </h1>
    </div>
  );
}
