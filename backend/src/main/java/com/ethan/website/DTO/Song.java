package com.ethan.website.DTO;

import org.springframework.data.annotation.Id;

import java.util.List;

public class Song {

    @Id
    public String id;               // currentSong.item.id
    public Long progress;           // currentSong.progress_ms
    public String albumCover;       // currentSong.item.album.images[0].url
    public Boolean isPlaying;       // currentSong.is_playing
    public String songName;         // currentSong.item.name
    public String albumName;        // currentSong.item.album.name
    public String songUrl;          // currentSong.item.external_urls.spotify
    public String songUri;          // currentSong.item.uri
    public Long duration;           // currentSong.item.duration_ms
    public List<String> artists;    // List<currentSong.artists.name>

    public Song() {}

    public Song(String id, Long progress, String albumCover, Boolean isPlaying, String songName, String albumName, String songUrl, String songUri, Long duration, List<String> artists) {
        this.id = id;
        this.progress = progress;
        this.albumCover = albumCover;
        this.isPlaying = isPlaying;
        this.songName = songName;
        this.albumName = albumName;
        this.songUrl = songUrl;
        this.songUri = songUri;
        this.duration = duration;
        this.artists = artists;
    }

    @Override
    public String toString() {
        return "Song{" +
                "id='" + id + '\'' +
                ", progress=" + progress +
                ", albumCover='" + albumCover + '\'' +
                ", isPlaying=" + isPlaying +
                ", songName='" + songName + '\'' +
                ", albumName='" + albumName + '\'' +
                ", songUrl='" + songUrl + '\'' +
                ", songUri='" + songUri + '\'' +
                ", duration=" + duration +
                ", artists=" + artists +
                '}';
    }
}