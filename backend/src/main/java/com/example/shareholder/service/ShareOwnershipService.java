package com.example.shareholder.service;

import org.springframework.stereotype.Service;
import com.example.shareholder.model.ShareOwnership;
import com.example.shareholder.repository.ShareOwnershipRepository;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

@Service
public class ShareOwnershipService {

  @Autowired
  private ShareOwnershipRepository shareOwnershipRepository;

  public List<ShareOwnership> getAllShareOwnerships() {
    return shareOwnershipRepository.findAll();
  }

}
