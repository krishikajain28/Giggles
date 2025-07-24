-- Table: locations
CREATE TABLE locations (
    id SERIAL PRIMARY KEY,
    city VARCHAR(100),
    state VARCHAR(100),
    country VARCHAR(100),
    latitude DOUBLE PRECISION,
    longitude DOUBLE PRECISION
);

-- Table: gigs
CREATE TABLE gigs (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200),
    description TEXT,
    company VARCHAR(200),
    location_id INTEGER REFERENCES locations(id),
    posted_at TIMESTAMP,
    start_time TIMESTAMP,
    end_time TIMESTAMP,
    pay NUMERIC(10,2),
    is_active BOOLEAN
);

-- Table: applications
CREATE TABLE applications (
    id SERIAL PRIMARY KEY,
    gig_id INTEGER REFERENCES gigs(id),
    student_id INTEGER,
    applied_at TIMESTAMP,
    status VARCHAR(50)
); 
