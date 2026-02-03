// Project Detail Page JavaScript

class ProjectDetailPage {
    constructor() {
        this.projectId = this.getProjectId()
        this.projectData = this.getProjectData()
        
        this.init()
    }
    
    getProjectId() {
        const params = new URLSearchParams(window.location.search)
        return params.get('project') || 'co-silo-ferry'
    }
    
    getImagePath(path) {
        // Get base path for GitHub Pages
        const pathname = window.location.pathname
        const base = pathname.replace(/\/[^\/]*$/, '')  // Remove filename, keep path
        return base + '/public/images/projects/' + path
    }
    
    getProjectData() {
        const getImg = (path) => this.getImagePath(path)
        return {
            "co-silo-ferry": {
                title: "Co-Silo Ferry Station",
                tagline: "A bridge between human and nature in Wynyard Point, Auckland",
                heroImage: getImg("co-silo-ferry-cover.png"),
                location: "Wynyard Point, Auckland, New Zealand",
                year: "2023",
                category: "Architecture",
                client: "Urban Design Studio",
                area: "2,500 m²",
                description: `
                    <p>Co-Silo Ferry Station is located in Wynyard Point, Auckland, New Zealand, surrounded by Pacific coral reefs and oceanic sea creatures. The site was a reclaimed land where fuel was once stored.</p>
                    <p>The design inspiration of the ferry station was to create a bridge between human and nature while preserving the industrial heritage of the site. The project began with research around CO2 emission impact on ocean ecologies, showing how high CO2 levels cause ocean acidification and stop coral growth.</p>
                    <p>The design incorporates sustainable elements including consideration for rising sea levels, porosity optimization, and marine life preservation. The architectural language balances the robust character of the original industrial structures with the delicate nature of the surrounding marine ecosystem.</p>
                `,
                gallery: [
                    getImg("co-silo-ferry-cover.png"),
                    getImg("co-silo-ferry-1.png"),
                    getImg("co-silo-ferry-2.png"),
                    getImg("co-silo-ferry-3.png")
                ],
                related: ["ultra-plant", "whare-piwakawaka", "shadow-of-dream"]
            },
            "other-projects": {
                title: "Other Projects",
                tagline: "A collection of architectural works and design explorations",
                heroImage: getImg("other-projects-cover.png"),
                location: "Various",
                year: "2023",
                category: "Architecture + Technology",
                client: "UCL & Various",
                area: "Various",
                description: `
                    <p>This collection showcases diverse design projects ranging from academic work to experimental installations, demonstrating versatility in architectural thinking and design methodology.</p>
                    <p>Includes the UCL interview portfolio and various undergraduate design projects that explore the intersection of traditional architectural principles with contemporary digital tools and technologies.</p>
                `,
                gallery: [
                    getImg("other-projects-cover.png")
                ],
                related: ["co-silo-ferry", "shadow-of-dream", "ultra-plant"]
            },
            "ultra-plant": {
                title: "Ultra Plant",
                tagline: "Post-nuclear eco-recovery through plant-based architecture",
                heroImage: getImg("ultra-plant-cover.png"),
                location: "Sydney, Australia",
                year: "2312 (fictional)",
                category: "Biology + Architecture",
                client: "DSC - Disarmament & Security Centre",
                area: "150,000 m²",
                description: `
                    <p>Set in Year 2312, Sydney, Australia, three months after a global nuclear outbreak, Ultra Plant addresses the challenge of ecological recovery in a post-apocalyptic world.</p>
                    <p>The project features an innovative living pod system where residents are connected to a meta-verse while their physical bodies are kept safe in sustainable habitats. The design includes groundbreaking mycelium experiments for creating sustainable delivery systems that connect individual living units.</p>
                    <p>Through a funding system connecting users with the meta-verse through technology, the project explores new relationships between human existence and natural systems. The architectural language combines organic growth patterns with structural integrity requirements of a resilient community.</p>
                `,
                gallery: [
                    getImg("ultra-plant-cover.png"),
                    getImg("ultra-plant-1.png"),
                    getImg("ultra-plant-2.png"),
                    getImg("ultra-plant-3.png")
                ],
                related: ["shadow-of-dream", "co-silo-ferry", "whare-piwakawaka"]
            },
            "shadow-of-dream": {
                title: "Shadow of Dream",
                tagline: "A billboard tower exploring the subconscious mind in Kyoto",
                heroImage: getImg("shadow-of-dream-cover.png"),
                location: "Kyoto, Japan",
                year: "2023",
                category: "Biology + Technology",
                client: "Light Art Collective",
                area: "8,500 m²",
                description: `
                    <p>Shadow of Dream is a conceptual billboard tower located in Kyoto, Japan, exploring the relationship between architecture and the human subconscious mind.</p>
                    <p>Inspired by futuristic visions and the spiritual traditions of Japanese culture, the tower creates a space for elderly people who have been left behind by the rapid advancement of technology. The design uses brain wave frequencies and dream states as principles for spatial organization.</p>
                    <p>The tower creates a "gray space" between reality and complete unconsciousness, where visitors enter different areas guided by their brain waves. The architectural form reflects the chaotic yet structured nature of dreams, with some spaces having clear functions while others follow no conventional rules.</p>
                `,
                gallery: [
                    getImg("shadow-of-dream-cover.png"),
                    getImg("shadow-of-dream-1.png"),
                    getImg("shadow-of-dream-2.png"),
                    getImg("shadow-of-dream-3.png")
                ],
                related: ["ultra-plant", "whare-piwakawaka", "co-silo-ferry"]
            },
            "whare-piwakawaka": {
                title: "Whare Piwakawaka",
                tagline: "A wildlife sanctuary celebrating Maori heritage and bird life",
                heroImage: getImg("whare-piwakawaka-cover.png"),
                location: "Urupukapuka Island, Bay of Islands, New Zealand",
                year: "2022",
                category: "Architecture + Biology",
                client: "Maori Cultural Trust / Project Island Song",
                area: "320 m²",
                description: `
                    <p>Whare Piwakawaka is a view and touring platform on Urupukapuka Island, Bay of Islands, New Zealand. Named after the Piwakawaka (Fantail) bird, the project uses sound as a medium to reconnect humans with nature and recreate early Maori beliefs about the relationship between people and the environment.</p>
                    <p>The design is built within a Kanuka forest, allowing the architecture to change with time and emerge into the landscape. Inspired by both bird nest construction and traditional Maori architectural practices of temporary, reusable structures, the project questions how human architecture can learn from nature to become truly integrated with its environment.</p>
                    <p>Part of the larger Project Island Song wildlife sanctuary initiative, the architecture serves both human visitors and native wildlife, creating zones that respond to different bird behaviors and soundscapes.</p>
                `,
                gallery: [
                    getImg("whare-piwakawaka-cover.png"),
                    getImg("whare-piwakawaka-1.png"),
                    getImg("whare-piwakawaka-2.png"),
                    getImg("whare-piwakawaka-3.png")
                ],
                related: ["co-silo-ferry", "ultra-plant", "shadow-of-dream"]
            }
        }
    }
    
    init() {
        const project = this.projectData[this.projectId]
        
        if (!project) {
            this.showError()
            return
        }
        
        this.renderProject(project)
        this.renderGallery(project)
        this.renderRelated(project)
        this.setupNavigation()
    }
    
    renderProject(project) {
        // Update page title
        document.title = `${project.title} - Grace Portfolio`
        
        // Hero
        document.getElementById('hero-image').src = project.heroImage
        document.getElementById('hero-image').alt = project.title
        document.getElementById('project-title').textContent = project.title
        document.getElementById('project-tagline').textContent = project.tagline
        document.getElementById('nav-title').textContent = project.title
        
        // Details
        const detailsHtml = `
            <div class="detail-item">
                <div class="detail-label">Location</div>
                <div class="detail-value">${project.location}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Year</div>
                <div class="detail-value">${project.year}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Category</div>
                <div class="detail-value">${project.category}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Client</div>
                <div class="detail-value">${project.client}</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">Area</div>
                <div class="detail-value">${project.area}</div>
            </div>
        `
        document.getElementById('project-details').innerHTML = detailsHtml
        
        // Description
        document.getElementById('project-description').innerHTML = project.description
    }
    
    renderGallery(project) {
        const gallery = document.getElementById('gallery-grid')
        gallery.innerHTML = project.gallery.map((src, index) => `
            <div class="gallery-item">
                <img src="${src}" alt="${project.title} - Image ${index + 1}" loading="lazy">
            </div>
        `).join('')
    }
    
    renderRelated(project) {
        const related = document.getElementById('related-projects')
        related.innerHTML = project.related.map(id => {
            const p = this.projectData[id]
            if (!p) return ''
            return `
                <a href="project-detail.html?project=${id}" class="related-item">
                    <img src="${p.heroImage}" alt="${p.title}">
                    <div class="related-item-content">
                        <h3 class="related-item-title">${p.title}</h3>
                        <span class="related-item-category">${p.category}</span>
                    </div>
                </a>
            `
        }).join('')
    }
    
    setupNavigation() {
        // Show nav title on scroll
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('.project-nav')
            const title = document.getElementById('nav-title')
            if (window.scrollY > 100) {
                nav.style.background = 'rgba(0,0,0,0.95)'
                title.style.opacity = '1'
            } else {
                nav.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)'
                title.style.opacity = '0'
            }
        })
        
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault()
                const target = document.querySelector(this.getAttribute('href'))
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' })
                }
            })
        })
    }
    
    showError() {
        document.body.innerHTML = `
            <div style="display:flex;align-items:center;justify-content:center;height:100vh;text-align:center;padding:24px;">
                <div>
                    <h1>Project Not Found</h1>
                    <p style="color:#888;margin-top:16px;">The project you're looking for doesn't exist.</p>
                    <a href="index.html" style="display:inline-block;margin-top:24px;color:#fff;text-decoration:none;border:1px solid #333;padding:12px 24px;">Back to Portfolio</a>
                </div>
            </div>
        `
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new ProjectDetailPage()
})
