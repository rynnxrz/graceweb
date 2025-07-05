class ConstellationPortfolio {
  constructor() {
    this.nodes = document.querySelectorAll(".node")
    this.connections = document.querySelector(".connections")
    this.modal = document.getElementById("modal-overlay")
    this.modalBody = document.getElementById("modal-body")
    this.modalClose = document.getElementById("modal-close")
    this.navButtons = document.querySelectorAll(".nav-btn")
    this.orbitalTabs = document.querySelectorAll(".orbital-tab")
    this.selectedCategories = new Set()

    // Drag functionality
    this.isDragging = false
    this.dragTarget = null
    this.dragOffset = { x: 0, y: 0 }
    this.dragStartPos = { x: 0, y: 0 }

    this.projectData = {
      "smart-building": {
        title: "Smart Building Interface",
        description:
          "An innovative interface design for smart building management systems, combining architectural principles with cutting-edge technology.",
        details:
          "This project explores the intersection of physical architecture and digital interfaces, creating intuitive controls for building automation systems. The interface adapts to different building types and user needs, incorporating biometric feedback and environmental sensors.",
        image: "/placeholder.svg?height=400&width=600",
        categories: ["Architecture", "Technology"],
        year: "2023",
        collaborators: ["Tech Innovations Lab", "Green Building Council"],
        awards: ["Digital Architecture Award 2023"],
      },
      "bio-sensors": {
        title: "Bio-Responsive Sensors",
        description: "Wearable sensors that respond to biological signals and environmental factors.",
        details:
          "Combining biological understanding with technological innovation to create responsive design solutions. These sensors monitor physiological responses and adapt environmental conditions in real-time.",
        image: "/placeholder.svg?height=400&width=600",
        categories: ["Biology", "Technology"],
        year: "2023",
        collaborators: ["BioTech Research Institute"],
        awards: ["Innovation in Biotechnology 2023"],
      },
      "sustainable-design": {
        title: "Sustainable Housing",
        description: "Eco-friendly architectural designs focused on sustainability and environmental harmony.",
        details:
          "A comprehensive approach to sustainable architecture, incorporating natural materials, passive energy systems, and biodegradable construction methods.",
        image: "/placeholder.svg?height=400&width=600",
        categories: ["Architecture"],
        year: "2022",
        collaborators: ["Sustainable Architecture Collective"],
        awards: ["Green Design Excellence 2022"],
      },
      "ecosystem-viz": {
        title: "Ecosystem Visualization",
        description: "Interactive visualizations of complex biological ecosystems and their interconnections.",
        details:
          "Data-driven visualizations that help understand the complexity and beauty of natural ecosystems, used for education and conservation efforts.",
        image: "/placeholder.svg?height=400&width=600",
        categories: ["Biology"],
        year: "2023",
        collaborators: ["National Geographic", "Conservation Biology Institute"],
      },
      "ai-interface": {
        title: "AI Design Interface",
        description: "User interface design for AI-powered creative tools and applications.",
        details:
          "Exploring how artificial intelligence can enhance the creative design process through intuitive interfaces that learn from user behavior.",
        image: "/placeholder.svg?height=400&width=600",
        categories: ["Technology"],
        year: "2023",
        collaborators: ["AI Research Lab", "Creative Technology Institute"],
      },
      "biophilic-space": {
        title: "Biophilic Workspace",
        description: "Workspace design that integrates natural elements with architectural innovation.",
        details:
          "Creating work environments that connect people with nature through thoughtful architectural design, improving productivity and well-being.",
        image: "/placeholder.svg?height=400&width=600",
        categories: ["Architecture", "Biology"],
        year: "2022",
        collaborators: ["Workplace Innovation Lab"],
        awards: ["Biophilic Design Award 2022"],
      },
      "integrated-system": {
        title: "Bio-Tech Architecture",
        description:
          "A revolutionary building system that integrates biological processes with technological infrastructure.",
        details:
          "This groundbreaking project represents the convergence of all three disciplines, creating living buildings that adapt, grow, and respond to their environment through bio-technological integration.",
        image: "/placeholder.svg?height=400&width=600",
        categories: ["Architecture", "Biology", "Technology"],
        year: "2023",
        collaborators: ["Future Cities Institute", "Bio-Architecture Lab", "Smart Systems Corp"],
        awards: ["Interdisciplinary Innovation Award 2023", "Future Architecture Prize 2023"],
      },
    }

    this.init()
  }

  init() {
    this.createConnections()
    this.bindEvents()
    this.bindDragEvents()
    this.startAnimations()
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

    // Modal events
    this.modalClose.addEventListener("click", () => this.closeModal())
    this.modal.addEventListener("click", (e) => {
      if (e.target === this.modal) this.closeModal()
    })

    // Window resize
    window.addEventListener("resize", () => this.updateAllConnections())
  }

  bindDragEvents() {
    this.orbitalTabs.forEach((tab) => {
      // Mouse events
      tab.addEventListener("mousedown", (e) => this.handleDragStart(e))

      // Touch events for mobile
      tab.addEventListener("touchstart", (e) => this.handleDragStart(e), { passive: false })
    })

    // Global mouse/touch events
    document.addEventListener("mousemove", (e) => this.handleDragMove(e))
    document.addEventListener("mouseup", (e) => this.handleDragEnd(e))
    document.addEventListener("touchmove", (e) => this.handleDragMove(e), { passive: false })
    document.addEventListener("touchend", (e) => this.handleDragEnd(e))
  }

  handleDragStart(e) {
    e.preventDefault()
    e.stopPropagation()

    this.isDragging = true
    this.dragTarget = e.currentTarget

    const clientX = e.type === "touchstart" ? e.touches[0].clientX : e.clientX
    const clientY = e.type === "touchstart" ? e.touches[0].clientY : e.clientY

    const rect = this.dragTarget.getBoundingClientRect()
    this.dragOffset = {
      x: clientX - rect.left - rect.width / 2,
      y: clientY - rect.top - rect.height / 2,
    }

    this.dragStartPos = {
      x: clientX,
      y: clientY,
    }

    // Add dragging class for visual feedback
    this.dragTarget.classList.add("dragging")
    document.body.style.cursor = "grabbing"

    // Pause orbital animation during drag
    this.dragTarget.parentElement.style.animationPlayState = "paused"
  }

  handleDragMove(e) {
    if (!this.isDragging || !this.dragTarget) return

    e.preventDefault()

    const clientX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX
    const clientY = e.type === "touchmove" ? e.touches[0].clientY : e.clientY

    const deltaX = clientX - this.dragStartPos.x
    const deltaY = clientY - this.dragStartPos.y

    // Update category node position
    this.dragTarget.style.transform = `translateX(-50%) translate(${deltaX}px, ${deltaY}px)`
    this.dragTarget.style.zIndex = "1000"

    // Move connected project nodes
    this.moveConnectedProjects(this.dragTarget.dataset.category, deltaX, deltaY)

    // Update connections in real-time
    this.updateAllConnections()
  }

  handleDragEnd(e) {
    if (!this.isDragging || !this.dragTarget) return

    this.isDragging = false

    // Remove dragging class
    this.dragTarget.classList.remove("dragging")
    document.body.style.cursor = "default"

    // Resume orbital animation
    this.dragTarget.parentElement.style.animationPlayState = "running"

    // Reset z-index
    this.dragTarget.style.zIndex = ""

    // Add smooth transition back
    this.dragTarget.style.transition = "transform 0.3s ease"

    // Reset connected projects transition
    this.resetConnectedProjectsTransition(this.dragTarget.dataset.category)

    // Clear transition after animation
    setTimeout(() => {
      if (this.dragTarget) {
        this.dragTarget.style.transition = ""
      }
    }, 300)

    this.dragTarget = null
  }

  moveConnectedProjects(category, deltaX, deltaY) {
    const projectNodes = document.querySelectorAll(".project-node")

    projectNodes.forEach((projectNode) => {
      const projectCategories = projectNode.dataset.categories.split(",")

      // Check if this project belongs to the dragged category and is visible
      if (projectCategories.includes(category) && !projectNode.classList.contains("hidden")) {
        projectNode.style.transform = `translate(${deltaX}px, ${deltaY}px)`
        projectNode.style.zIndex = "999"
      }
    })
  }

  resetConnectedProjectsTransition(category) {
    const projectNodes = document.querySelectorAll(".project-node")

    projectNodes.forEach((projectNode) => {
      const projectCategories = projectNode.dataset.categories.split(",")

      if (projectCategories.includes(category) && !projectNode.classList.contains("hidden")) {
        projectNode.style.transition = "transform 0.3s ease"
        projectNode.style.transform = "translate(0px, 0px)"
        projectNode.style.zIndex = ""

        // Clear transition after animation
        setTimeout(() => {
          projectNode.style.transition = ""
        }, 300)
      }
    })
  }

  handleTabClick(event) {
    // Prevent click if we just finished dragging
    if (Math.abs(event.clientX - this.dragStartPos.x) > 5 || Math.abs(event.clientY - this.dragStartPos.y) > 5) {
      return
    }

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

  updateIntersectionIndicators(visibleProjects) {
    // Reset all indicators
    document.querySelectorAll(".intersection-indicator").forEach((indicator) => {
      indicator.classList.remove("active")
    })

    // Activate indicators for visible projects with multiple categories
    visibleProjects.forEach((project) => {
      const categories = project.dataset.categories.split(",")
      const selectedArray = Array.from(this.selectedCategories)
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
    const node = event.currentTarget
    const nodeType = node.dataset.node

    if (nodeType === "project") {
      const projectId = node.dataset.project
      this.showProjectModal(projectId)
    } else if (nodeType === "grace") {
      this.showAboutModal()
    }
  }

  showProjectModal(projectId) {
    const project = this.projectData[projectId]
    if (!project) return

    const intersectionBadge =
      project.categories.length > 1
        ? `<div class="intersection-badge">
        <span class="intersection-icon">⚡</span>
        <span>Interdisciplinary Project</span>
      </div>`
        : ""

    this.modalBody.innerHTML = `
      <div class="project-modal">
        ${intersectionBadge}
        <img src="${project.image}" alt="${project.title}" style="width: 100%; border-radius: 16px; margin-bottom: 24px; border: 1px solid rgba(255,255,255,0.1);">
        <h2 style="margin-bottom: 12px; color: #ffffff; font-size: 28px; font-weight: 700;">${project.title}</h2>
        <p style="margin-bottom: 20px; color: #cccccc; font-size: 16px; line-height: 1.5;">${project.description}</p>
        <p style="margin-bottom: 24px; line-height: 1.6; color: #ffffff; font-size: 14px;">${project.details}</p>
        
        <div class="project-meta">
          <div class="meta-section">
            <h4 style="color: #ffffff; margin-bottom: 8px; font-size: 14px;">Categories</h4>
            <div class="project-tags" style="justify-content: flex-start; margin-bottom: 16px;">
              ${project.categories.map((cat) => `<span class="tag ${cat.toLowerCase()}" style="font-size: 11px; padding: 4px 8px;">${cat}</span>`).join("")}
            </div>
          </div>
          
          ${
            project.collaborators
              ? `
          <div class="meta-section">
            <h4 style="color: #ffffff; margin-bottom: 8px; font-size: 14px;">Collaborators</h4>
            <p style="color: #cccccc; font-size: 13px; margin-bottom: 16px;">${project.collaborators.join(", ")}</p>
          </div>
          `
              : ""
          }
          
          ${
            project.awards
              ? `
          <div class="meta-section">
            <h4 style="color: #ffffff; margin-bottom: 8px; font-size: 14px;">Awards</h4>
            <p style="color: #cccccc; font-size: 13px; margin-bottom: 16px;">${project.awards.join(", ")}</p>
          </div>
          `
              : ""
          }
          
          <div class="meta-footer" style="display: flex; justify-content: space-between; align-items: center; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.1);">
            <span style="color: #999999; font-size: 13px;">Year: ${project.year}</span>
            ${project.categories.length > 1 ? '<span style="color: #ffffff; font-size: 12px; background: rgba(255,255,255,0.1); padding: 4px 8px; border-radius: 8px;">Interdisciplinary</span>' : ""}
          </div>
        </div>
      </div>
    `

    this.modal.classList.add("active")
  }

  showAboutModal() {
    this.modalBody.innerHTML = `
      <div class="about-modal">
        <img src="/images/grace-profile.jpeg" alt="Grace Profile" style="width: 120px; height: 120px; border-radius: 12px; margin: 0 auto 24px; display: block; border: 3px solid rgba(255, 255, 255, 0.3);">
        <h2 style="text-align: center; margin-bottom: 16px; color: #ffffff; font-size: 32px;">Grace</h2>
        <h3 style="text-align: center; margin-bottom: 24px; color: #cccccc; font-size: 18px;">Multidisciplinary Designer</h3>
        <p style="margin-bottom: 20px; line-height: 1.6; color: #ffffff; font-size: 15px;">Grace is a visionary designer who bridges the worlds of architecture, biology, and technology. Her work explores the intersections between these disciplines, creating innovative solutions that are both functional and beautiful.</p>
        <p style="margin-bottom: 20px; line-height: 1.6; color: #cccccc; font-size: 14px;">With a background in sustainable design and a passion for biomimicry, Grace brings a unique perspective to every project, whether it's designing smart buildings, creating bio-responsive interfaces, or visualizing complex ecosystems.</p>
        <p style="line-height: 1.6; color: #cccccc; font-size: 14px;">Her interdisciplinary approach has led to groundbreaking work in sustainable architecture, biotechnology interfaces, and innovative design solutions that harmonize human needs with natural systems.</p>
      </div>
    `

    this.modal.classList.add("active")
  }

  closeModal() {
    this.modal.classList.remove("active")
  }

  startAnimations() {
    // Stagger node animations on load (exclude central node and project nodes)
    this.nodes.forEach((node, index) => {
      if (!node.classList.contains("project-node") && !node.classList.contains("central-node")) {
        node.style.opacity = "0"
        node.style.transform += " translateY(20px)"

        setTimeout(() => {
          node.style.transition = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
          node.style.opacity = "1"
          node.style.transform = node.style.transform.replace(" translateY(20px)", "")
        }, index * 100)
      }
    })

    // Update connections periodically (less frequent during drag)
    setInterval(() => {
      if (!this.isDragging) {
        this.updateAllConnections()
      }
    }, 100)
  }
}

// Initialize the portfolio when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new ConstellationPortfolio()
})

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const modal = document.getElementById("modal-overlay")
    if (modal.classList.contains("active")) {
      modal.classList.remove("active")
    }
  }
})
