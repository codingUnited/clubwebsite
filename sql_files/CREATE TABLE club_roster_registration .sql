CREATE TABLE club_roster_registration (
    id SERIAL PRIMARY KEY,
    "start_time" TIMESTAMP NOT NULL,   
    "completion_time" TIMESTAMP NOT NULL,
    "school_email" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "preferred_name" VARCHAR(255) NOT NULL,
    "personal_email" VARCHAR(255) NOT NULL,
    "status" TEXT CHECK (status IN ('New', 'Returning')) NOT NULL,
    "club_join_date" DATE NOT NULL,
    "major" TEXT NOT NULL,
    "exp_grad_date" INT,
    "interests" TEXT,
    "added_to_comm_channels" TEXT[],
    "comments" TEXT
)

