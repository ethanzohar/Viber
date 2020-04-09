package com.ethan.website.repositories;

import com.ethan.website.DTO.Streamer;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SpotifyRepo extends MongoRepository<Streamer, String> {
}