import faqs from "@/data/faqs/testSessions.json";
export default function Faqs() {
  return (
    <>
      <div>
        {faqs.map((index) => (
          <>
            <div>{index.title}</div>
            <div>{index.response}</div>
            <div>{index.date.split("T")[0]}</div>
            <div>{index.category}</div>
          </>
        ))}
      </div>
    </>
  );
}
