package com.markerud.recipes.model;

import lombok.Getter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@MappedSuperclass
public abstract class BaseEntity {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "CREATED_ON")
    private LocalDateTime createdOn;

    @Column(name = "MODIFIED_ON")
    private LocalDateTime modifiedOn;

    @Version
    @Column(name = "VERSION")
    private Long version = 0L;

    public boolean isNew() {
        return (this.id == null);
    }

    @PrePersist
    private void initTimeStamps() {
        if (isNew()) {
            createdOn = LocalDateTime.now();
        }
        modifiedOn = createdOn;
    }

    @PreUpdate
    private void updateTimeStamp() {
        modifiedOn = LocalDateTime.now();
    }

    @Override
    public String toString() {
        return this.getClass().getSimpleName() + ": ID=" + id + ", %s, version=" + version + ", createdOn=" + createdOn
                + ", modifiedOn=" + modifiedOn;
    }

}
