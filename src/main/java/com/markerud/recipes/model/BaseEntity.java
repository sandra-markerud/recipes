package com.markerud.recipes.model;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Version;
import java.time.LocalDateTime;

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

	public Long getId() {
		return id;
	}

	public LocalDateTime getCreatedOn() {
		return createdOn;
	}

	public LocalDateTime getModifiedOn() {
		return modifiedOn;
	}

	public Long getVersion() {
		return version;
	}

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
