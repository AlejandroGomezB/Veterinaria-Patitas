package com.test.vetpatitas.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.test.vetpatitas.repositories.CitaRepositories;
import com.test.vetpatitas.entity.CitaEntity;

@Service
public class CitaService {
	
	@Autowired
	private CitaRepositories citaRepositories;
	
	public List<CitaEntity> getCita(){
		return citaRepositories.findAll();
	}
	
	public CitaEntity getCitaId(long idCita){
		return citaRepositories.findById(idCita).get();
	}
	
	public CitaEntity setCita(CitaEntity cita) {
		return citaRepositories.save(cita);
	}
	
	public CitaEntity deleteCita(long idCita) {
		citaRepositories.deleteById(idCita);
		return null;
	}

}
