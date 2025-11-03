package com.barbearia.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="cliente")
public class Cliente {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name="nome", length = 100, unique = true)
    private String nome;
    
    @Column(name="sobrenome")
    private String sobrenome;
    
    @Column(name="telefone")
    private String telefone;
    
    @Column(name="email")
    private String email;
    
    @Column(name="senha")
    private String senha;

}
