class ConstellationPortfolio {
  constructor() {
    this.nodes = document.querySelectorAll(".node")
    this.connections = document.querySelector(".connections")
    this.projectDetailNode = document.getElementById("project-detail-node")
    this.projectDetailBody = document.getElementById("project-detail-body")
    this.projectDetailClose = document.getElementById("project-detail-close")
    this.navButtons = document.querySelectorAll(".nav-btn")
    this.orbitalTabs = document.querySelectorAll(".orbital-tab")
    this.selectedCategories = new Set()

    // Add camera viewport reference
    this.cameraViewport = document.getElementById("camera-viewport")

    // Cache DOM elements for performance
    this.backgroundGrid = document.querySelector('.background-grid')
    this.intersectionIndicators = document.querySelectorAll(".intersection-indicator")

    // Performance optimization flags
    this.isAnimating = false
    this.animationFrame = null

    // Focus trap for modal
    this.focusTrapActive = false
    this.lastFocusedElement = null

    this.projectData = {
      "co-silo-ferry": {
        title: "Co-Silo Ferry Station",
        description: "A community-focused ferry station design located in Wynyard Point, Auckland, surrounded by Pacific coral reefs.",
        details:
          "Co-Silo Ferry Station is located in Wynyard Point, Auckland, New Zealand, surrounded by pacific coral reefs and oceanic sea creatures. The site was a reclaimed land where used to storage fuels. The design inspiration of the ferry station was to create a bridge between human and nature. The project started with researches around CO2 emission impact on ocean ecologies, showing how high CO2 levels cause ocean acidification and stop coral growth. The design incorporates sustainable elements and preserves the industrial heritage of the site.",
        image: "co-silo-ferry-cover.png",
        thumbnail: "co-silo-ferry-1.png",
        categories: ["Architecture"],
        year: "2023",
        collaborators: ["Urban Design Studio"],
      },
      "other-projects": {
        title: "Other Projects",
        description: "A collection of architectural and design works including UCL interview portfolio and undergraduate project collections.",
        details:
          "This collection showcases diverse design projects ranging from academic work to experimental installations, demonstrating versatility in architectural thinking and design methodology. Includes UCL interview portfolio and various undergraduate design projects.",
        image: "other-projects-cover.png",
        thumbnail: "other-projects-cover.png",
        categories: ["Architecture", "Technology"],
        year: "2023",
        collaborators: ["UCL", "Various"],
      },
      "ultra-plant": {
        title: "Ultra Plant",
        description: "A post-nuclear eco-recovery project in Sydney, exploring sustainable living through plant-based architecture and meta-verse integration.",
        details:
          "Project Ultra-Plant took place to set the goal of recovering the eco-system of our planet by collecting and experimenting with the survived plants, aiming to save as many plant genes as possible and redevelop its potential for eco-recovery of the new era. Set in Year 2312, Sydney, Australia, 3 months after WW3, the project addresses global nuclear outbreak. It features living pods where residents are connected to meta-verse while their physical bodies are kept safe. The design includes mycelium experiments for sustainable delivery systems and a funding system connecting users with meta-verse through technology.",
        image: "ultra-plant-cover.png",
        thumbnail: "ultra-plant-1.png",
        categories: ["Biology", "Architecture"],
        year: "2023",
        collaborators: ["Botanical Research Institute", "DSC"],
      },
      "shadow-of-dream": {
        title: "Shadow of Dream",
        description: "A conceptual billboard tower in Kyoto, exploring the subconscious mind and cultural significance in high-tech urban cities.",
        details:
          "'Shadow of Dream' is a conceptual design based on human subconscious mind. Inspired by futuristic projects like Cyberpunk 2077, the project is set in a future scenario of an over-populated, high-technology society. Located in Kyoto, Japan, the tower creates a space of golden time for elderly people left behind by rapid technological advancement. The design explores brain waves and dream states as spatial organization principles, creating a gray space between reality and complete unconsciousness. Through site investigation of Shinto influences and modern urban development, the project imagines a fantasy of future city life in architectural form.",
        image: "shadow-of-dream-cover.png",
        thumbnail: "shadow-of-dream-1.png",
        categories: ["Biology", "Technology"],
        year: "2023",
        collaborators: ["Light Art Collective"],
      },
      "whare-piwakawaka": {
        title: "Whare Piwakawaka",
        description: "A wildlife viewing platform on Urupukapuka Island, using sound to reconnect humans with nature and Maori heritage.",
        details:
          "Whare Piwakawaka is a view and touring platform for travelers on Urupukapuka Island, Bay of Islands, New Zealand. The project uses sound as media to connect human and species on the island to recreate early Maori beliefs around nature and human relationship. Part of Project Island Song wildlife sanctuary initiative, the design is built within Kanuka forest, changing with time and emerging into the landscape. Inspired by bird nest construction and Maori architectural traditions of temporary, reusable structures, the project questions how human architecture can learn from birds to integrate into the landscape. Named after the Piwakawaka (Fantail) bird, it celebrates the connection between human and native wildlife.",
        image: "whare-piwakawaka-cover.png",
        thumbnail: "whare-piwakawaka-1.png",
        categories: ["Architecture", "Biology"],
        year: "2022",
        collaborators: ["Maori Cultural Trust", "Community Development Alliance", "Project Island Song"],
        awards: ["Cultural Architecture Award 2022"],
      },
      "bio-responsive-interface": {
        title: "Bio-Responsive Interface",
        description: "A living interface that responds to human biometric data, exploring the boundary between digital and organic systems.",
        details:
          "This experimental interface project explores how digital systems can respond to biological inputs in real-time. Using heart rate variability, skin conductance, and breath patterns, the interface adapts its behavior to create a more intuitive human-computer interaction. The project draws inspiration from how plants respond to environmental stimuli, translating these natural responses into digital gestures and animations. Through extensive testing with participants, we found that bio-responsive interfaces reduce cognitive load by 40% compared to traditional static interfaces.",
        image: "placeholder.svg",
        thumbnail: "placeholder.svg",
        categories: ["Technology", "Biology"],
        year: "2024",
        collaborators: ["HCI Research Lab", "BioTech Institute"],
        tags: ["Experimental", "Research", "Interaction Design"],
      },
      "sustainable-urban-housing": {
        title: "Sustainable Urban Housing",
        description: "Modular housing solution for densely populated urban areas, integrating vertical gardens and renewable energy systems.",
        details:
          "Designed for the growing urban population, this modular housing system maximizes limited urban space while minimizing environmental impact. Each unit includes integrated vertical gardens that provide insulation, air purification, and food production capabilities. Solar skin panels on the exterior generate 80% of the building's energy needs, while a greywater recycling system reduces water consumption by 60%. The modular design allows for flexible configurations that can adapt to different site conditions and family sizes.",
        image: "placeholder.svg",
        thumbnail: "placeholder.svg",
        categories: ["Architecture", "Technology"],
        year: "2023",
        collaborators: ["Sustainable Cities Initiative", "Green Building Council"],
        tags: ["Housing", "Sustainability", "Urban Design"],
      },
      "digital-ecology-visualization": {
        title: "Digital Ecology Visualization",
        description: "Interactive data visualization tool for tracking and understanding complex ecosystem interactions in real-time.",
        details:
          "This visualization platform transforms raw ecological data into intuitive, interactive 3D environments that help researchers and the public understand complex environmental relationships. By mapping predator-prey dynamics, nutrient cycles, and climate impacts, the tool makes invisible ecological processes visible and comprehensible. The system pulls data from thousands of sensors worldwide, creating a living digital twin of Earth's ecosystems that updates in near real-time.",
        image: "placeholder.svg",
        thumbnail: "placeholder.svg",
        categories: ["Technology", "Biology"],
        year: "2024",
        collaborators: ["Environmental Data Science Center", "Conservation International"],
        tags: ["Data Visualization", "Environmental", "Interactive"],
      },
    }

    // Add getImagePath function for dynamic image resolution on GitHub Pages
    this.getImagePath = (filename) => {
      const pathname = window.location.pathname
      const base = pathname.replace(/\/[^\/]*$/, '')
      return base + '/public/images/projects/' + filename
    }

    this.init()
  }

  init() {
    this.resolveAllImages()
    this.createConnections()
    this.bindEvents()
    this.startAnimations()
  }

  resolveAllImages() {
    // Resolve all images with data-src attribute
    const lazyImages = document.querySelectorAll('img[data-src]')
    lazyImages.forEach((img) => {
      const filename = img.dataset.src
      if (filename) {
        img.src = this.getImagePath(filename)
      }
    })

    // Resolve project detail images in projectData
    Object.keys(this.projectData).forEach((projectId) => {
      const project = this.projectData[projectId]
      if (project.image) {
        project.image = this.getImagePath(project.image)
      }
      if (project.thumbnail) {
        project.thumbnail = this.getImagePath(project.thumbnail)
      }
    })
  }

  createConnections() {
    const projectNodes = document.querySelectorAll(".project-node")

    // Create connections from each project to its category tabs
    projectNodes.forEach((projectNode) => {
      const projectCategories = projectNode.dataset.categories.split(",")

      projectCategories.forEach((category) => {
        const categoryTab = document.querySelector(`[data-category="${category.toLowerCase()}"]`)
        if (categoryTab) {
          this.createConnection(projectNode, categoryTab, "project")
        }
      })
    })

    // Hide all connection lines initially since project nodes are hidden
    const lines = this.connections.querySelectorAll(".connection-line")
    lines.forEach((line) => {
      line.classList.add("hidden")
    })
  }

  createConnection(node1, node2, type) {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
    path.classList.add("connection-line")
    path.classList.add(`${type}-connection`)

    path.node1 = node1
    path.node2 = node2
    path.connectionType = type

    this.connections.appendChild(path)
    this.updateConnectionPosition(path)
  }

  updateConnectionPosition(line) {
    const rect1 = line.node1.getBoundingClientRect()
    const rect2 = line.node2.getBoundingClientRect()

    const x1 = rect1.left + rect1.width / 2
    const y1 = rect1.top + rect1.height / 2
    const x2 = rect2.left + rect2.width / 2
    const y2 = rect2.top + rect2.height / 2

    const midX = (x1 + x2) / 2
    const midY = (y1 + y2) / 2

    let controlX = midX
    let controlY = midY

    // Create curved connections from projects to category tabs
    const angle = Math.atan2(y2 - y1, x2 - x1)
    controlX = midX + Math.cos(angle + Math.PI / 2) * 30
    controlY = midY + Math.sin(angle + Math.PI / 2) * 30

    const pathData = `M ${x1} ${y1} Q ${controlX} ${controlY} ${x2} ${y2}`
    line.setAttribute("d", pathData)
  }

  updateAllConnections() {
    const lines = this.connections.querySelectorAll(".connection-line")
    lines.forEach((line) => this.updateConnectionPosition(line))
  }

  bindEvents() {
    // Node hover and click events
    this.nodes.forEach((node) => {
      node.addEventListener("mouseenter", (e) => this.handleNodeHover(e, true))
      node.addEventListener("mouseleave", (e) => this.handleNodeHover(e, false))
      node.addEventListener("click", (e) => this.handleNodeClick(e))
    })

    // Orbital tab events
    this.orbitalTabs.forEach((tab) => {
      tab.addEventListener("click", (e) => this.handleTabClick(e))
    })

    // Project detail events
    this.projectDetailClose.addEventListener("click", () => this.closeProjectDetail())
    this.projectDetailNode.addEventListener("click", (e) => {
      if (e.target === this.projectDetailNode) this.closeProjectDetail()
    })

    // Window resize with passive listener and throttling
    let resizeTimeout
    window.addEventListener(
      "resize",
      () => {
        clearTimeout(resizeTimeout)
        resizeTimeout = setTimeout(() => this.updateAllConnections(), 100)
      },
      { passive: true }
    )
  }

  handleTabClick(event) {
    const tab = event.currentTarget
    const category = tab.dataset.category

    if (this.selectedCategories.has(category)) {
      this.selectedCategories.delete(category)
      tab.classList.remove("active")
    } else {
      this.selectedCategories.add(category)
      tab.classList.add("active")
    }

    this.filterProjects()
    this.updateCameraPosition()
  }

  filterProjects() {
    const projectNodes = document.querySelectorAll(".project-node")
    const lines = this.connections.querySelectorAll(".connection-line")

    if (this.selectedCategories.size === 0) {
      // Hide all projects when no categories selected
      projectNodes.forEach((node) => {
        node.classList.remove("show")
        node.classList.add("hidden")
      })
      lines.forEach((line) => {
        if (line.connectionType === "project") {
          line.classList.add("hidden")
        }
      })
      this.updateIntersectionIndicators([])
      return
    }

    const selectedArray = Array.from(this.selectedCategories)
    const visibleProjects = []

    projectNodes.forEach((node) => {
      const projectCategories = node.dataset.categories.split(",")
      
      // Show ALL projects when no categories selected (default state)
      if (this.selectedCategories.size === 0) {
        node.classList.remove("hidden")
        node.classList.add("show")
        visibleProjects.push(node)
        return
      }

      // Show projects that contain ANY of the selected categories
      const hasAnyCategory = selectedArray.some((cat) => projectCategories.includes(cat))

      if (hasAnyCategory) {
        node.classList.remove("hidden")
        node.classList.add("show")
        visibleProjects.push(node)
      } else {
        node.classList.remove("show")
        node.classList.add("hidden")
      }
    })

    // Update connection visibility
    lines.forEach((line) => {
      if (line.connectionType === "project") {
        const projectNode = line.node1
        const categoryTab = line.node2

        const projectHidden = projectNode.classList.contains("hidden")
        const categorySelected = this.selectedCategories.has(categoryTab.dataset.category)

        if (projectHidden || !categorySelected) {
          line.classList.add("hidden")
        } else {
          line.classList.remove("hidden")
          // Add intersection styling for multi-category connections
          if (this.selectedCategories.size > 1) {
            const projectCategories = projectNode.dataset.categories.split(",")
            const hasMultipleSelectedCategories =
              selectedArray.filter((cat) => projectCategories.includes(cat)).length > 1
            if (hasMultipleSelectedCategories) {
              line.classList.add("intersection")
            } else {
              line.classList.remove("intersection")
            }
          } else {
            line.classList.remove("intersection")
          }
        }
      }
    })

    this.updateIntersectionIndicators(visibleProjects)
  }

  updateCameraPosition() {
    // Prevent multiple simultaneous camera updates
    if (this.isAnimating) return
    this.isAnimating = true

    // Use requestAnimationFrame for smooth updates
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame)
    }

    this.animationFrame = requestAnimationFrame(() => {
      // Remove all existing shift classes
      this.cameraViewport.classList.remove("shift-architecture", "shift-biology", "shift-technology", "shift-project-detail")

      // Add a subtle transition effect for smoother movement
      const hasProjectDetail = this.projectDetailNode.classList.contains("show")
      if (this.selectedCategories.size === 0 && !hasProjectDetail) {
        // When no categories selected and no project detail, smoothly return to center
        this.cameraViewport.style.transition = "transform 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
      } else {
        // When categories are selected or project detail is shown, use the standard transition
        this.cameraViewport.style.transition = "transform 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
      }

      // Add shift classes based on selected categories
      this.selectedCategories.forEach((category) => {
        this.cameraViewport.classList.add(`shift-${category}`)
      })

      // Add project detail shift if detail node is shown
      if (hasProjectDetail) {
        this.cameraViewport.classList.add("shift-project-detail")
      }

      // Add a subtle parallax effect to the background grid (cached element)
      if (this.backgroundGrid) {
        const shouldScale = this.selectedCategories.size > 0 || hasProjectDetail
        if (shouldScale) {
          this.backgroundGrid.style.transition = "transform 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
          this.backgroundGrid.style.transform = "scale(1.1)"
        } else {
          this.backgroundGrid.style.transition = "transform 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
          this.backgroundGrid.style.transform = "scale(1)"
        }
      }

      // Reset animation flag after a short delay
      setTimeout(() => {
        this.isAnimating = false
      }, 100)
    })
  }

  updateIntersectionIndicators(visibleProjects) {
    // Reset all indicators using cached elements
    this.intersectionIndicators.forEach((indicator) => {
      indicator.classList.remove("active", "triple")
    })

    // Activate indicators for visible projects with multiple categories
    const selectedArray = Array.from(this.selectedCategories)
    visibleProjects.forEach((project) => {
      const categories = project.dataset.categories.split(",")
      const matchingCategories = categories.filter((cat) => selectedArray.includes(cat))

      if (matchingCategories.length > 1) {
        const indicator = project.querySelector(".intersection-indicator")
        if (indicator) {
          indicator.classList.add("active")
          if (matchingCategories.length === 3) {
            indicator.classList.add("triple")
          }
        }
      }
    })
  }

  handleNodeHover(event, isEntering) {
    const node = event.currentTarget
    const nodeType = node.dataset.node

    if (isEntering) {
      const lines = this.connections.querySelectorAll(".connection-line")
      lines.forEach((line) => {
        if (line.node1 === node || line.node2 === node) {
          line.classList.add("active")
        }
      })
    } else {
      const lines = this.connections.querySelectorAll(".connection-line")
      lines.forEach((line) => line.classList.remove("active"))
    }
  }

  handleNodeClick(event) {
    // Prevent rapid clicking
    if (this.isAnimating) return
    
    const node = event.currentTarget
    const nodeType = node.dataset.node

    if (nodeType === "project") {
      const projectId = node.dataset.project
      // Navigate to project detail page
      window.location.href = `project-detail.html?project=${projectId}`
    } else if (nodeType === "grace") {
      this.showAboutDetail()
    }
  }

  showProjectDetail(projectId) {
    const project = this.projectData[projectId]
    if (!project) return

    // Use DocumentFragment for better performance
    const fragment = document.createDocumentFragment()
    
    // Create intersection badge if needed
    if (project.categories.length > 1) {
      const badge = document.createElement('div')
      badge.className = 'intersection-badge'
      badge.innerHTML = `
        <span class="intersection-icon">⚡</span>
        <span>Interdisciplinary Project</span>
      `
      fragment.appendChild(badge)
    }

    // Create main content elements
    const img = document.createElement('img')
    img.src = project.image
    img.alt = project.title
    img.className = 'project-detail-image'
    fragment.appendChild(img)

    const title = document.createElement('h2')
    title.id = 'project-detail-title'
    title.className = 'project-detail-title'
    title.textContent = project.title
    fragment.appendChild(title)

    const description = document.createElement('p')
    description.className = 'project-detail-description'
    description.textContent = project.description
    fragment.appendChild(description)

    const details = document.createElement('p')
    details.className = 'project-detail-details'
    details.textContent = project.details
    fragment.appendChild(details)

    // Create meta section
    const meta = document.createElement('div')
    meta.className = 'project-detail-meta'
    
    // Categories section
    const categoriesSection = document.createElement('div')
    categoriesSection.className = 'project-detail-section'
    categoriesSection.innerHTML = `
      <h4>Categories</h4>
      <div class="project-detail-tags">
        ${project.categories.map((cat) => `<span class="tag ${cat.toLowerCase()}">${cat}</span>`).join("")}
      </div>
    `
    meta.appendChild(categoriesSection)

    // Collaborators section
    if (project.collaborators) {
      const collabSection = document.createElement('div')
      collabSection.className = 'project-detail-section'
      collabSection.innerHTML = `
        <h4>Collaborators</h4>
        <p>${project.collaborators.join(", ")}</p>
      `
      meta.appendChild(collabSection)
    }

    // Awards section
    if (project.awards) {
      const awardsSection = document.createElement('div')
      awardsSection.className = 'project-detail-section'
      awardsSection.innerHTML = `
        <h4>Awards</h4>
        <p>${project.awards.join(", ")}</p>
      `
      meta.appendChild(awardsSection)
    }

    // Footer
    const footer = document.createElement('div')
    footer.className = 'project-detail-footer'
    footer.innerHTML = `
      <span class="project-detail-year">Year: ${project.year}</span>
      ${project.categories.length > 1 ? '<span class="project-detail-badge">Interdisciplinary</span>' : ""}
    `
    meta.appendChild(footer)

    fragment.appendChild(meta)

    // Clear and append new content
    this.projectDetailBody.innerHTML = ''
    this.projectDetailBody.appendChild(fragment)

    // Show with slight delay for smoother animation
    requestAnimationFrame(() => {
      this.projectDetailNode.classList.add("show")
      this.enableFocusTrap()
      this.updateCameraPosition()
    })
  }

  showAboutDetail() {
    // Use DocumentFragment for better performance
    const fragment = document.createDocumentFragment()

    // Create image
    const img = document.createElement('img')
    img.src = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1727381403497-JUk88dYVSc6TzOJ2rhIArjrVSRvDab.jpeg"
    img.alt = "Grace Profile"
    img.className = "project-detail-image"
    img.style.height = "250px"
    img.style.objectPosition = "center"
    fragment.appendChild(img)

    // Create title
    const title = document.createElement('h2')
    title.id = 'project-detail-title'
    title.className = 'project-detail-title'
    title.textContent = 'Grace'
    fragment.appendChild(title)

    // Create description
    const description = document.createElement('p')
    description.className = 'project-detail-description'
    description.textContent = 'Multidisciplinary Designer'
    fragment.appendChild(description)

    // Create details
    const details = document.createElement('p')
    details.className = 'project-detail-details'
    details.textContent = 'Grace is a visionary designer who bridges the worlds of architecture, biology, and technology. Her work explores the intersections between these disciplines, creating innovative solutions that are both functional and beautiful.'
    fragment.appendChild(details)

    // Create meta section
    const meta = document.createElement('div')
    meta.className = 'project-detail-meta'
    
    const backgroundSection = document.createElement('div')
    backgroundSection.className = 'project-detail-section'
    backgroundSection.innerHTML = `
      <h4>Background</h4>
      <p>With a background in sustainable design and a passion for biomimicry, Grace brings a unique perspective to every project, whether it's designing smart buildings, creating bio-responsive interfaces, or visualizing complex ecosystems.</p>
    `
    meta.appendChild(backgroundSection)

    const approachSection = document.createElement('div')
    approachSection.className = 'project-detail-section'
    approachSection.innerHTML = `
      <h4>Approach</h4>
      <p>Her interdisciplinary approach has led to groundbreaking work in sustainable architecture, biotechnology interfaces, and innovative design solutions that harmonize human needs with natural systems.</p>
    `
    meta.appendChild(approachSection)

    fragment.appendChild(meta)

    // Clear and append new content
    this.projectDetailBody.innerHTML = ''
    this.projectDetailBody.appendChild(fragment)

    // Show with slight delay for smoother animation
    requestAnimationFrame(() => {
      this.projectDetailNode.classList.add("show")
      this.enableFocusTrap()
      this.updateCameraPosition()
    })
  }

  closeProjectDetail() {
    this.projectDetailNode.classList.remove("show")
    this.disableFocusTrap()
    this.updateCameraPosition()
  }

  // Focus trap for modal accessibility
  enableFocusTrap() {
    if (this.focusTrapActive) return
    
    this.lastFocusedElement = document.activeElement
    this.focusTrapActive = true
    
    // Make modal focusable
    this.projectDetailNode.setAttribute('tabindex', '-1')
    
    // Focus first focusable element
    const focusableElements = this.projectDetailNode.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    
    if (focusableElements.length > 0) {
      focusableElements[0].focus()
    } else {
      this.projectDetailNode.focus()
    }
    
    // Add keydown listener for Escape and Tab
    this.keydownListener = (e) => this.handleTrapKeydown(e)
    document.addEventListener('keydown', this.keydownListener)
  }

  disableFocusTrap() {
    if (!this.focusTrapActive) return
    
    this.focusTrapActive = false
    document.removeEventListener('keydown', this.keydownListener)
    
    // Restore focus to last focused element
    if (this.lastFocusedElement && this.lastFocusedElement.focus) {
      this.lastFocusedElement.focus()
    }
  }

  handleTrapKeydown(e) {
    if (e.key !== 'Tab' && e.key !== 'Escape') return
    
    const focusableElements = this.projectDetailNode.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]
    
    if (e.key === 'Escape') {
      this.closeProjectDetail()
      return
    }
    
    // Shift + Tab or Tab
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    }
  }

  startAnimations() {
    // Stagger ALL node animations on load (exclude only central node)
    this.nodes.forEach((node, index) => {
      if (!node.classList.contains("central-node")) {
        // Project nodes should be visible immediately
        if (node.classList.contains("project-node")) {
          // Ensure project nodes are shown
          node.classList.remove("hidden")
          node.classList.add("show")
        } else {
          // Other nodes get entrance animation
          node.style.opacity = "0"
          node.style.transform += " translateY(20px)"

          setTimeout(() => {
            node.style.transition = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
            node.style.opacity = "1"
            node.style.transform = node.style.transform.replace(" translateY(20px)", "")
          }, index * 100)
        }
      }
    })

    // Use more efficient connection updates
    this.startConnectionUpdates()
  }

  startConnectionUpdates() {
    let lastUpdate = 0
    let isRunning = true
    
    const updateConnections = (timestamp) => {
      // Stop when page is not visible
      if (!isRunning || document.hidden) {
        return
      }
      
      // Throttle updates to 30fps instead of 10fps for better performance
      if (timestamp - lastUpdate >= 33) {
        this.updateAllConnections()
        lastUpdate = timestamp
      }
      
      if (isRunning && !document.hidden) {
        requestAnimationFrame(updateConnections)
      }
    }
    
    // Handle visibility change
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        isRunning = false
      } else {
        isRunning = true
        lastUpdate = 0
        requestAnimationFrame(updateConnections)
      }
    })
    
    requestAnimationFrame(updateConnections)
  }
}

// Initialize the portfolio when DOM is loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    window.constellationPortfolio = new ConstellationPortfolio()
  })
} else {
  window.constellationPortfolio = new ConstellationPortfolio()
}

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const projectDetailNode = document.getElementById("project-detail-node")
    if (projectDetailNode.classList.contains("show")) {
      projectDetailNode.classList.remove("show")
      // Update camera position
      const portfolio = window.constellationPortfolio
      if (portfolio) {
        portfolio.updateCameraPosition()
      }
    }
  }
})
