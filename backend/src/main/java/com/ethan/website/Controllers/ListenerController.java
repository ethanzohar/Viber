package com.ethan.website.Controllers;

import com.ethan.website.DTO.Customers;
import com.ethan.website.DTO.Endpoints;
import com.ethan.website.DTO.Streamer;
import com.ethan.website.repositories.SpotifyRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/spotify/listener")
public class ListenerController {

    @Autowired
    private SpotifyRepo spotifyRepo;

//    @GetMapping("/getUsers")
//    public List<Streamer> getNearbyStreamers() {
//        return
//    }

    @GetMapping("/streamers")
    public List<Streamer> getStreamers() {
        return spotifyRepo.findAll();
    }

}