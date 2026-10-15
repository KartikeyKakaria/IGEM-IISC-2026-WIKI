import "../../css/texts/Card.css";
interface CardProps {
  title: string,
  text: {
      title: string,
      content: string,
      images?: [string],
    }[]
  borderColor?: string,
}

export default function Card({ title, text, borderColor }: CardProps) {
  return (
    <div className="card_container" >
      <h1 className="card_title">{title}</h1>
      <div className="card" style={{ boxShadow: `0 0 10px ${borderColor || "var(--color-black)"}` }}>
        {
            text?.map((item, index) => (
                <div key={index}>
                    <h2 className="font-4xl">{item.title}</h2>
                    <p>{item.content}</p>
                    <div className="images_section">
                        {item.images?.map((img, imgIndex) => (
                            <img key={imgIndex} src={img} alt={item.title} />
                        ))}
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  );
}
