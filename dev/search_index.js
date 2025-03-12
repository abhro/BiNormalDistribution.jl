var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = BiNormalDistribution","category":"page"},{"location":"#BiNormalDistribution","page":"Home","title":"BiNormalDistribution","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for BiNormalDistribution.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [BiNormalDistribution]","category":"page"},{"location":"#BiNormalDistribution.BiNormal","page":"Home","title":"BiNormalDistribution.BiNormal","text":"BiNormal{T<:Real,W<:Real} <: ContinuousUnivariateDistribution\nBiNormal(λ, μ₁, σ₁, μ₂, σ₂)\n\nLinear combination of two Gaussians.\n\n\n\n\n\n","category":"type"},{"location":"#BiNormalDistribution.moments-Tuple{AbstractVector, Integer}","page":"Home","title":"BiNormalDistribution.moments","text":"moments(x::AbstractVector, n::Integer)\n\nGet the first n-moments of a given dataset. (mean(x^k), k = 1, ..., n)\n\n\n\n\n\n","category":"method"},{"location":"#Distributions.pdf-Tuple{BiNormal, Real}","page":"Home","title":"Distributions.pdf","text":"pdf(d::BiNormal, x::Real)\n\nThe probability density function (pdf) is\n\nf(x λ μ_1 σ_1 μ_2 σ_2) =\nλ mathcalN(x μ_1 σ_1)\n+ (1-λ) mathcalN(x μ_2 σ_2)\n\nwhere mathcalN is the pdf of the normal distribution.\n\n\n\n\n\n","category":"method"},{"location":"#Statistics.mean-Tuple{BiNormal}","page":"Home","title":"Statistics.mean","text":"mean(d::BiNormal)\n\nMean of the bi-normal distribution is μ = λ μ_1 + (1 - λ) μ_2\n\n\n\n\n\n","category":"method"},{"location":"#Statistics.var-Tuple{BiNormal}","page":"Home","title":"Statistics.var","text":"var(d::BiNormal)\n\nVariance of the bi-normal distribution is\n\nbeginalign*\nσ^2 = λσ_1^2 + (1-λ)σ_2^2 + λ(1-λ) (μ_1 - μ_2)^2 \n= λ (σ_1^2 + μ_1^2) + (1 - λ) (σ_2^2 + μ_2^2) - μ^2\nendalign*\n\n\n\n\n\n","category":"method"}]
}
