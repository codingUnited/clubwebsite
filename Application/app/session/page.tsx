import sessions from "@/data/sessions/testSessions.json";
export default function Sessions() {

  return (
    <>
      <div>
        {sessions.map((index) => (
          <>
            <div>{index.title}</div>
            <div>{index.date.split("T")[0]}</div>
            <div>{index.description}</div>
          </>
        ))}
      </div>
    </>
  );
}
