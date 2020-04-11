package com.ethan.website.repositories;

import com.ethan.website.DTO.Streamer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface SpotifyRepo extends MongoRepository<Streamer, String> {

    @Query("{ 'timestamp': { $lt: ?0 } }")
    List<Streamer> findInactiveStreamers(Long timestamp);

    @Query("{ _id: { $ne: ?0 } }")
    List<Streamer> findAllStreamersOtherThanMe(String id);
}