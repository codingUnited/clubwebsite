import sessions from "@/data/sessions/testSessions.json";
export default function SessionMonth(month: { month: number }) {
  return (
    <>
      <div>
        {sessions.map((index) => (
          <>
            <div>{index.title}</div>
            <div>{index.date.split("T")[0].split("-")[1]}</div>
            <div>{index.description}</div>
          </>
        ))}
      </div>
    </>
  );
}
