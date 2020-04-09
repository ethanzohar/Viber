package com.ethan.website.DTO;

public class ListenerSongInformation {

    private String songName;
    private String songUrl;
    private String albumCover;
    private int playbackMS;

    public ListenerSongInformation(String songName, String songUrl, String albumCover, int playbackMS) {
        this.songName = songName;
        this.songUrl = songUrl;
        this.albumCover = albumCover;
        this.playbackMS = playbackMS;
    }

    public String getSongName() {
        return songName;
    }

    public void setSongName(String songName) {
        this.songName = songName;
    }

    public String getSongUrl() {
        return songUrl;
    }

    public void setSongUrl(String songUrl) {
        this.songUrl = songUrl;
    }

    public String getAlbumCover() {
        return albumCover;
    }

    public void setAlbumCover(String albumCover) {
        this.albumCover = albumCover;
    }

    public int getPlaybackMS() {
        return playbackMS;
    }

    public void setPlaybackMS(int playbackMS) {
        this.playbackMS = playbackMS;
    }
}
