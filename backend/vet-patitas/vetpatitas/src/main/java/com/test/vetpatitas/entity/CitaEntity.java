package com.test.vetpatitas.entity;

import java.io.Serializable;
import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "TBCITA")
@JsonInclude(Include.NON_NULL)
public class CitaEntity implements Serializable  {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true, nullable = false, name = "id_cita")
	@JsonProperty("id")
	private long idCita;
	
	@Column(name = "cliente")
	@JsonProperty("cliente")
	private String nombreCliente;
	
	@Column(name = "mascota")
	@JsonProperty("mascota")
	private String nombreMascota;
	
	@Column(name = "motivo")
	@JsonProperty("motivo")
	private String motivo;
	
	@Column(name = "fecha")
	@JsonProperty("fecha")
	private Date fecha;

	
	public CitaEntity() {
		super();
	}

	public CitaEntity(long idCita, String nombreCliente, String nombreMascota, String motivo, Date fecha) {
		super();
		this.idCita = idCita;
		this.nombreCliente = nombreCliente;
		this.nombreMascota = nombreMascota;
		this.motivo = motivo;
		this.fecha = fecha;
	}

	public long getIdCita() {
		return idCita;
	}

	public void setIdCita(long idCita) {
		this.idCita = idCita;
	}

	public String getNombreCliente() {
		return nombreCliente;
	}

	public void setNombreCliente(String nombreCliente) {
		this.nombreCliente = nombreCliente;
	}

	public String getNombreMascota() {
		return nombreMascota;
	}

	public void setNombreMascota(String nombreMascota) {
		this.nombreMascota = nombreMascota;
	}

	public String getMotivo() {
		return motivo;
	}

	public void setMotivo(String motivo) {
		this.motivo = motivo;
	}

	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}

	
}
