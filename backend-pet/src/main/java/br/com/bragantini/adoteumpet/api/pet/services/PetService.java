package br.com.bragantini.adoteumpet.api.pet.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.bragantini.adoteumpet.api.pet.dtos.PetRequest;
import br.com.bragantini.adoteumpet.api.pet.dtos.PetResponse;
import br.com.bragantini.adoteumpet.api.pet.mappers.PetMapper;
import br.com.bragantini.adoteumpet.core.repositories.PetRepository;

@Service
public class PetService {

    @Autowired
    private PetRepository petRepository;

    @Autowired
    private PetMapper petMapper;
    
    public List<PetResponse> findAll(){
        return petRepository.findAll()
            .stream()
            .map(petMapper::toResponse)
            .toList();
    }

    public PetResponse create(PetRequest petRequest) {
        var petToCreate = petMapper.toModel(petRequest);
        var createdPet = petRepository.save(petToCreate);
        return petMapper.toResponse(createdPet);
    }
}
