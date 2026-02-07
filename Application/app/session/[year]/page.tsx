import sessions from "@/data/sessions/testSessions.json";
export default function SessionYear(year: { year: number }) {
  return (
    <>
      <div>
        {sessions.map((index) => (
          <>
            <div>{index.title}</div>
            <div>{index.date.split("T")[0].split("-")[0]}</div>
            <div>{index.description}</div>
          </>
        ))}
      </div>
    </>
  );
}
