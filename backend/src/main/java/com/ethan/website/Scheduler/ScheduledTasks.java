package com.ethan.website.Scheduler;

import com.ethan.website.repositories.SpotifyRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class ScheduledTasks {

    @Autowired
    private SpotifyRepo spotifyRepo;

    // Runs every 3 seconds
    // Deletes all streamers who have not pinged in the last 5 seconds
//    @Scheduled(fixedRate = 3000)
//    public void cleanUpStreamers() {
//        spotifyRepo.deleteAll(spotifyRepo.findInactiveStreamers(System.currentTimeMillis() - 5000L));
//    }

}
