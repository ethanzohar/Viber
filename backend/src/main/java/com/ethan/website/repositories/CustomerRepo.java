package com.ethan.website.repositories;

import java.util.List;

import com.ethan.website.DTO.Customers;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CustomerRepo extends MongoRepository<Customers, String> {

    public Customers findByFirstName(String firstName);
    public List<Customers> findByLastName(String lastName);

}