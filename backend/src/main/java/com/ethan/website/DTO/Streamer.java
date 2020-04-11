package com.ethan.website.DTO;

import org.springframework.data.annotation.Id;

public class Streamer {

    @Id
    public String id;           // user.id
    public String username;     // user.display_name
    public String email;        // user.email
    public Boolean premium;     // user.product == "premium
    public Double latitude;     // position.latitude
    public Double longitude;    // position.longitude
    public Song currentSong;    // currentSong
    public Long timestamp = 0L;

    public Streamer() {}

    public Streamer(String id, String username, String email, Boolean premium, Double latitude, Double longitude, Song currentSong) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.premium = premium;
        this.latitude = latitude;
        this.longitude = longitude;
        this.currentSong = currentSong;
    }

    public void setTimestamp(Long timestamp) {
        this.timestamp = timestamp;
    }

    @Override
    public String toString() {
        return "Streamer{" +
                "id='" + id + '\'' +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", premium=" + premium +
                ", latitude=" + latitude +
                ", longitude=" + longitude +
                ", currentSong=" + currentSong +
                ", timestamp=" + timestamp +
                '}';
    }
}